import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Droplet, Network, Users, Award, Shield, ArrowRight, CheckCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const Index = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Zap,
      title: "Electricidad",
      description: "Instalaciones, reparaciones y mantenimiento eléctrico profesional"
    },
    {
      icon: Droplet,
      title: "Plomería",
      description: "Servicios de plomería para hogares y negocios"
    },
    {
      icon: Network,
      title: "Redes y Telecomunicaciones",
      description: "Instalación y configuración de redes profesionales"
    }
  ];

  const features = [
    {
      icon: Users,
      title: "Técnicos Certificados",
      description: "Todos nuestros técnicos están validados y certificados"
    },
    {
      icon: Shield,
      title: "Pagos Seguros",
      description: "Sistema de pagos confiable con múltiples métodos"
    },
    {
      icon: Award,
      title: "Calidad Garantizada",
      description: "Calificaciones y reseñas verificadas de clientes reales"
    }
  ];

  const benefits = [
    "Búsqueda rápida de técnicos especializados",
    "Sistema de mensajería integrado",
    "Agenda de citas con confirmación",
    "Múltiples métodos de pago",
    "Historial completo de servicios",
    "Calificaciones transparentes"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="border-b border-border bg-card/30 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Bridgely" className="h-12" />
              <div>
                <h1 className="text-2xl font-bold">Bridgely</h1>
                <p className="text-xs text-muted-foreground">Connecting Ideas & Futures</p>
              </div>
            </div>
            <Button variant="hero" onClick={() => navigate("/auth")}>
              Iniciar Sesión
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold">
            Conectamos a{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Clientes
            </span>
            {" "}con{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Técnicos Profesionales
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            La plataforma más confiable para encontrar técnicos especializados en electricidad, plomería y redes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="hero" size="lg" onClick={() => navigate("/auth")} className="text-lg">
              Comenzar Ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate("/auth")} className="text-lg">
              Soy Técnico
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16 bg-card/20">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Nuestros Servicios</h3>
          <p className="text-muted-foreground">Encuentra el técnico perfecto para tu necesidad</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="hover:shadow-elegant transition-all hover:scale-105">
                <CardHeader>
                  <Icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">¿Por qué Bridgely?</h3>
          <p className="text-muted-foreground">La confianza y calidad que necesitas</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16 bg-card/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Todo lo que Necesitas</h3>
            <p className="text-muted-foreground">Una plataforma completa para gestionar tus servicios</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-card border-primary/20">
          <CardContent className="text-center py-12 space-y-6">
            <h3 className="text-4xl font-bold">¿Listo para Comenzar?</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Únete a miles de usuarios que ya confían en Bridgely para sus servicios técnicos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="hero" size="lg" onClick={() => navigate("/auth")} className="text-lg">
                Registrarme como Cliente
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate("/auth")} className="text-lg border-primary/50">
                Registrarme como Técnico
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Bridgely" className="h-10" />
              <div>
                <h4 className="font-bold">Bridgely</h4>
                <p className="text-sm text-muted-foreground">Connecting Ideas & Futures</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Bridgely. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
