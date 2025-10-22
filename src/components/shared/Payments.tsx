import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CreditCard, Smartphone, Building2, Wallet, Calendar, Download } from "lucide-react";

interface PaymentsProps {
  userType: "client" | "technician";
}

const Payments = ({ userType }: PaymentsProps) => {
  const payments = userType === "client" ? [
    { id: 1, service: "Reparación eléctrica", technician: "Carlos Rodríguez", amount: 850, commission: 85, date: "22 Oct 2025", status: "Pagado", method: "Tarjeta" },
    { id: 2, service: "Instalación de red", technician: "José Hernández", amount: 1200, commission: 120, date: "25 Oct 2025", status: "Pendiente", method: "SPEI" },
    { id: 3, service: "Reparación de tubería", technician: "Ana Martínez", amount: 600, commission: 60, date: "20 Oct 2025", status: "Pagado", method: "Transferencia" }
  ] : [
    { id: 1, service: "Reparación eléctrica", client: "Juan Pérez", amount: 850, commission: 85, net: 765, date: "22 Oct 2025", status: "Pagado", method: "Tarjeta" },
    { id: 2, service: "Instalación de panel", client: "María López", amount: 1500, commission: 150, net: 1350, date: "18 Oct 2025", status: "Pagado", method: "SPEI" }
  ];

  const paymentMethods = [
    { id: "card", name: "Tarjeta de Crédito/Débito", icon: CreditCard },
    { id: "transfer", name: "Transferencia Bancaria", icon: Building2 },
    { id: "spei", name: "SPEI", icon: Smartphone },
    { id: "wallet", name: "Billetera Digital", icon: Wallet }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Pagos</h2>
        <p className="text-muted-foreground">
          {userType === "client" ? "Gestiona tus pagos y métodos de pago" : "Consulta tus ingresos y comisiones"}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Total {userType === "client" ? "Gastado" : "Ganado"}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">
              ${payments.filter(p => p.status === "Pagado").reduce((sum, p) => sum + (userType === "client" ? p.amount : (p as any).net), 0).toLocaleString()}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Pagos Pendientes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-yellow-500">
              ${payments.filter(p => p.status === "Pendiente").reduce((sum, p) => sum + p.amount, 0).toLocaleString()}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Comisiones {userType === "client" ? "Pagadas" : "Descontadas"}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-muted-foreground">
              ${payments.reduce((sum, p) => sum + p.commission, 0).toLocaleString()}
            </p>
          </CardContent>
        </Card>
      </div>

      {userType === "client" && (
        <Card>
          <CardHeader>
            <CardTitle>Métodos de Pago</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {paymentMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <div key={method.id} className="flex items-center gap-3 p-4 border border-border rounded-lg hover:border-primary cursor-pointer transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                    <span className="font-medium">{method.name}</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Historial de {userType === "client" ? "Pagos" : "Ingresos"}</CardTitle>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="paid">Pagados</SelectItem>
                <SelectItem value="pending">Pendientes</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {payments.map((payment) => (
              <div key={payment.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="space-y-1">
                  <p className="font-semibold">{payment.service}</p>
                  <p className="text-sm text-muted-foreground">
                    {userType === "client" ? payment.technician : (payment as any).client}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {payment.date}
                    <span>•</span>
                    <span>{payment.method}</span>
                  </div>
                </div>
                <div className="text-right space-y-2">
                  <p className="text-xl font-bold">${payment.amount.toLocaleString()}</p>
                  {userType === "technician" && (
                    <p className="text-sm text-muted-foreground">
                      Neto: ${(payment as any).net.toLocaleString()}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    Comisión: ${payment.commission}
                  </p>
                  <Badge className={payment.status === "Pagado" ? "bg-primary/20 text-primary" : "bg-yellow-500/20 text-yellow-500"}>
                    {payment.status}
                  </Badge>
                </div>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Payments;
