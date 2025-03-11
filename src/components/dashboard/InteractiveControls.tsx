"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Calendar, Download, Filter, RefreshCw, Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveControlsProps {
  onDateRangeChange?: (range: { from: Date; to: Date }) => void;
  onFilterChange?: (filter: string) => void;
  onSearch?: (query: string) => void;
  onRefresh?: () => void;
  onExport?: () => void;
  className?: string;
}

const InteractiveControls = ({
  onDateRangeChange = () => {},
  onFilterChange = () => {},
  onSearch = () => {},
  onRefresh = () => {},
  onExport = () => {},
  className,
}: InteractiveControlsProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("month");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handlePeriodChange = (value: string) => {
    setSelectedPeriod(value);
    // Here you would calculate the actual date range based on the period
    // For example, if "month" is selected, set date range to current month
    const now = new Date();
    let from = new Date();
    let to = new Date();

    switch (value) {
      case "week":
        from = new Date(now.setDate(now.getDate() - now.getDay()));
        to = new Date(now.setDate(now.getDate() + 6));
        break;
      case "month":
        from = new Date(now.getFullYear(), now.getMonth(), 1);
        to = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        break;
      case "quarter":
        const quarter = Math.floor(now.getMonth() / 3);
        from = new Date(now.getFullYear(), quarter * 3, 1);
        to = new Date(now.getFullYear(), quarter * 3 + 3, 0);
        break;
      case "year":
        from = new Date(now.getFullYear(), 0, 1);
        to = new Date(now.getFullYear(), 11, 31);
        break;
      default:
        break;
    }

    onDateRangeChange({ from, to });
  };

  return (
    <div
      className={cn(
        "w-full p-4 bg-white border-b flex flex-wrap items-center justify-between gap-3",
        className,
      )}
    >
      <div className="flex items-center space-x-2">
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            placeholder="Rechercher des commissions..."
            className="h-9 w-[200px] md:w-[300px] rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button
            type="submit"
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0"
          >
            <Search className="h-4 w-4" />
          </Button>
        </form>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              Filtres
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => onFilterChange("all")}>
              Toutes les Commissions
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onFilterChange("retail")}>
              Commissions Retail
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onFilterChange("qvp")}>
              Commissions QVP
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onFilterChange("generation")}>
              Commissions Génération
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex items-center space-x-2">
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-2" />
          <Select
            defaultValue={selectedPeriod}
            onValueChange={handlePeriodChange}
          >
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Sélectionner période" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Cette Semaine</SelectItem>
              <SelectItem value="month">Ce Mois</SelectItem>
              <SelectItem value="quarter">Ce Trimestre</SelectItem>
              <SelectItem value="year">Cette Année</SelectItem>
              <SelectItem value="custom">Période Personnalisée</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={onRefresh}
          title="Actualiser les données"
        >
          <RefreshCw className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={onExport}
          className="flex items-center"
        >
          <Download className="h-4 w-4 mr-2" />
          Exporter
        </Button>
      </div>
    </div>
  );
};

export default InteractiveControls;
