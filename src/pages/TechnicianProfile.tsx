import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, MapPin, Calendar, Award, ArrowLeft, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const TechnicianProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock data - would come from API
  const technician = {
    id: id || "1",
    name: "Carlos Rodríguez",
    specialty: "Electricidad",
    experience: "8 años",
    location: "Ciudad de México",
    rating: 4.8,
    totalReviews: 127,
    completedServices: 342,
    description: "Técnico especializado en instalaciones eléctricas residenciales y comerciales. Certificado por la SEP con amplia experiencia en sistemas de iluminación y paneles solares.",
    certifications: ["Certificación SEP", "Instalador Solar Certificado", "Sistemas de Seguridad"],
    availability: "Disponible",
    isPremium: true
  };

  const reviews = [
    { id: 1, author: "María López", rating: 5, comment: "Excelente servicio, muy profesional", date: "Hace 2 días" },
    { id: 2, author: "Juan Pérez", rating: 5, comment: "Resolvió el problema rápidamente", date: "Hace 1 semana" },
    { id: 3, author: "Ana García", rating: 4, comment: "Buen trabajo, recomendado", date: "Hace 2 semanas" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Bridgely" className="h-10" />
            <h1 className="text-xl font-bold">Bridgely</h1>
          </div>
          <Button variant="ghost" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-6">
              <Avatar className="h-32 w-32">
                <AvatarImage src="" />
                <AvatarFallback className="text-2xl bg-gradient-hero">CR</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-3xl font-bold">{technician.name}</h2>
                    {technician.isPremium && (
                      <Badge className="bg-gradient-hero">Premium</Badge>
                    )}
                  </div>
                  <p className="text-xl text-muted-foreground">{technician.specialty}</p>
                </div>

                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="font-semibold">{technician.rating}</span>
                    <span className="text-muted-foreground">({technician.totalReviews} reseñas)</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {technician.location}
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {technician.experience}
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Award className="h-4 w-4" />
                    {technician.completedServices} servicios
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="hero" className="flex-1">
                    Solicitar Servicio
                  </Button>
                  <Button variant="outline">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Enviar Mensaje
                  </Button>
                </div>

                <Badge variant="secondary" className="w-fit">
                  {technician.availability}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Sobre el Técnico</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{technician.description}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Certificaciones</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {technician.certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  <span>{cert}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Reseñas de Clientes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="border-b border-border last:border-0 pb-4 last:pb-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>{review.author[0]}</AvatarFallback>
                    </Avatar>
                    <span className="font-semibold">{review.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-1">{review.comment}</p>
                <p className="text-sm text-muted-foreground">{review.date}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TechnicianProfile;
