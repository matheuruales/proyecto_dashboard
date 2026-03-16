# Dash — Analytics Dashboard

Dashboard de analíticas y e-commerce construido con Next.js, basado en una maqueta de Figma. Muestra métricas de negocio como ventas, visitantes, pedidos, sesiones y conversión en una interfaz moderna y responsiva.

## Vista previa

```
┌─────────────────────────────────────────────────────┐
│ Sidebar │        TopBar (búsqueda, notifs)           │
│         ├─────────────────────────────────────────── │
│ Nav     │  [Sales]  [Visitors]  [Orders]             │
│ Items   │                                            │
│         │  [Sessions Chart]  [Conversion Gauge]      │
│         │                                            │
│         │  [Promo Card]                              │
└─────────────────────────────────────────────────────┘
```

## Stack

| Tecnología | Versión |
|---|---|
| Next.js | 16.1.6 |
| React | 19.2.3 |
| TypeScript | 5 |
| Tailwind CSS | 4 |

## Estructura del proyecto

```
app/
├── layout.tsx                        # Layout raíz con fuente Plus Jakarta Sans
├── page.tsx                          # Página principal (renderiza DashboardShell)
├── globals.css                       # Variables CSS de theming y estilos globales
└── components/
    └── dashboard/
        ├── DashboardShell.tsx        # Contenedor raíz del dashboard
        ├── charts/
        │   ├── SessionLineChart.tsx  # Gráfica de líneas SVG con curvas bezier
        │   └── ConversionGauge.tsx   # Gauge semicircular SVG
        ├── cards/
        │   ├── StatCard.tsx          # Tarjeta de métrica reutilizable
        │   ├── SessionsCard.tsx      # Sesiones con gráfica y selector de día
        │   ├── ConversionCard.tsx    # Conversión con ingresos y gastos
        │   └── PromoCard.tsx         # Tarjeta de llamada a acción
        ├── layout/
        │   ├── TopBar.tsx            # Barra superior
        │   └── DashboardContent.tsx  # Área de contenido principal
        ├── navigation/
        │   └── Sidebar.tsx           # Panel de navegación lateral
        └── shared/
            └── Icons.tsx             # Librería de íconos SVG (26+)
```

## Instalación y uso

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build
npm run start

# Linting
npm run lint
```

El servidor de desarrollo corre en [http://localhost:3000](http://localhost:3000).

## Métricas del dashboard

| Métrica | Valor | Tendencia |
|---|---|---|
| Total Sales | 263k | +15.6% |
| Total Visitors | 35k | -6.2% |
| Total Orders | 165k | +3.5% |
| Conversión | 58.19% | — |

> Los datos son mock en `app/components/dashboard/shared/dashboardData.ts` y pueden reemplazarse con llamadas a una API real.

## Theming

Los colores están definidos como variables CSS en `globals.css`:

```css
--primary:  #4d4bff  /* morado */
--success:  #29b674  /* verde  */
--danger:   #d06a7b  /* rojo   */
--bg-page:  #f0f0f6
--panel:    #ffffff
```

## Responsividad

| Breakpoint | Comportamiento |
|---|---|
| > 1200px | Layout completo con sidebar |
| ≤ 1200px | Sidebar colapsado |
| ≤ 980px | Grids apilados verticalmente |
| ≤ 640px | Optimizaciones mobile |
