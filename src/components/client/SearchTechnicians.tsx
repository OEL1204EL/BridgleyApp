import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Star, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SearchTechnicians = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [specialty, setSpecialty] = useState("all");
  const [location, setLocation] = useState("");

  const technicians = [
    { id: "1", name: "Carlos Rodríguez", specialty: "Electricidad", location: "Ciudad de México", rating: 4.8, reviews: 127, isPremium: true },
    { id: "2", name: "María González", specialty: "Plomería", location: "Guadalajara", rating: 4.9, reviews: 98, isPremium: true },
    { id: "3", name: "José Hernández", specialty: "Redes", location: "Monterrey", rating: 4.7, reviews: 85, isPremium: false },
    { id: "4", name: "Ana Martínez", specialty: "Plomería", location: "Ciudad de México", rating: 4.6, reviews: 73, isPremium: true },
    { id: "5", name: "Luis Pérez", specialty: "Electricidad", location: "Puebla", rating: 4.8, reviews: 112, isPremium: false },
    { id: "6", name: "Carmen Sánchez", specialty: "Redes", location: "Querétaro", rating: 4.9, reviews: 156, isPremium: true }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Buscar Técnicos</h2>
        <p className="text-muted-foreground">Encuentra al profesional perfecto para tu proyecto</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filtros de Búsqueda
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por nombre..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={specialty} onValueChange={setSpecialty}>
              <SelectTrigger>
                <SelectValue placeholder="Especialidad" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las Especialidades</SelectItem>
                <SelectItem value="electricidad">Electricidad</SelectItem>
                <SelectItem value="plomeria">Plomería</SelectItem>
                <SelectItem value="redes">Redes</SelectItem>
              </SelectContent>
            </Select>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Ubicación..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {technicians.map((tech) => (
          <Card key={tech.id} className="hover:shadow-elegant transition-shadow cursor-pointer" onClick={() => navigate(`/technician/${tech.id}`)}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-gradient-hero">{tech.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{tech.name}</h3>
                    <p className="text-sm text-muted-foreground">{tech.specialty}</p>
                  </div>
                </div>
                {tech.isPremium && <Badge className="bg-gradient-hero">Premium</Badge>}
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {tech.location}
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="font-semibold">{tech.rating}</span>
                <span className="text-sm text-muted-foreground">({tech.reviews} reseñas)</span>
              </div>
              <Button variant="hero" className="w-full" onClick={(e) => {
                e.stopPropagation();
                navigate(`/technician/${tech.id}`);
              }}>
                Ver Perfil
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SearchTechnicians;
