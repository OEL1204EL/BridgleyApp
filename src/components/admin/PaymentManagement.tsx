import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DollarSign, TrendingUp, Users, CreditCard } from "lucide-react";

const PaymentManagement = () => {
  const payments = [
    { id: 1, service: "Instalación eléctrica", client: "Juan Pérez", technician: "Carlos Rodríguez", amount: 850, commission: 85, date: "22 Oct 2025", status: "Completado" },
    { id: 2, service: "Reparación de tubería", client: "María López", technician: "Ana Martínez", amount: 600, commission: 60, date: "20 Oct 2025", status: "Completado" },
    { id: 3, service: "Instalación de red", client: "José García", technician: "Luis Pérez", amount: 1200, commission: 120, date: "19 Oct 2025", status: "Pendiente" }
  ];

  const totalRevenue = payments.filter(p => p.status === "Completado").reduce((sum, p) => sum + p.amount, 0);
  const totalCommission = payments.filter(p => p.status === "Completado").reduce((sum, p) => sum + p.commission, 0);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Gestión de Pagos</h2>
        <p className="text-muted-foreground">Monitorea transacciones y comisiones</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Ingresos Totales</CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-green-500 flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              +12.5% vs mes anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Comisiones</CardTitle>
            <CreditCard className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalCommission.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">10% de transacciones</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Transacciones</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{payments.length}</div>
            <p className="text-xs text-muted-foreground mt-1">Este mes</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pendientes</CardTitle>
            <DollarSign className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-500">
              {payments.filter(p => p.status === "Pendiente").length}
            </div>
            <p className="text-xs text-muted-foreground mt-1">Por procesar</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Historial de Transacciones</CardTitle>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                <SelectItem value="completed">Completadas</SelectItem>
                <SelectItem value="pending">Pendientes</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {payments.map((payment) => (
              <div key={payment.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="space-y-2">
                  <h3 className="font-semibold">{payment.service}</h3>
                  <div className="grid gap-1 text-sm text-muted-foreground">
                    <p>Cliente: {payment.client}</p>
                    <p>Técnico: {payment.technician}</p>
                    <p>Fecha: {payment.date}</p>
                  </div>
                </div>
                <div className="text-right space-y-2">
                  <p className="text-xl font-bold">${payment.amount.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">
                    Comisión: ${payment.commission}
                  </p>
                  <Badge className={payment.status === "Completado" ? "bg-green-500/20 text-green-500" : "bg-yellow-500/20 text-yellow-500"}>
                    {payment.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentManagement;
