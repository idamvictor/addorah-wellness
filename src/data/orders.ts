export type OrderStatus = "new" | "confirmed" | "paid" | "shipped" | "delivered" | "cancelled";
export type PaymentMethod = "bank-transfer" | "pay-on-delivery";

export type OrderLine = {
  slug: string;
  name: string;
  variant?: string;
  /** Unit price in NGN, checked against the catalog when the order was placed. */
  price: number;
  qty: number;
  image: string;
};

export type Order = {
  /** Unguessable id used in the confirmation URL. */
  id: string;
  /** Human-friendly number, e.g. "AW-1001", used as the payment reference. */
  number: string;
  createdAt: string;
  status: OrderStatus;
  customer: { name: string; email: string; phone: string };
  delivery: { address: string; city: string; state: string; notes?: string };
  paymentMethod: PaymentMethod;
  lines: OrderLine[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  history: { status: OrderStatus; at: string; note?: string }[];
};

export const orderStatuses: { value: OrderStatus; label: string }[] = [
  { value: "new", label: "New" },
  { value: "confirmed", label: "Confirmed" },
  { value: "paid", label: "Paid" },
  { value: "shipped", label: "Shipped" },
  { value: "delivered", label: "Delivered" },
  { value: "cancelled", label: "Cancelled" },
];

export const paymentMethods: { value: PaymentMethod; label: string; description: string }[] = [
  {
    value: "bank-transfer",
    label: "Bank transfer",
    description: "We’ll show our account details after you place the order.",
  },
  {
    value: "pay-on-delivery",
    label: "Pay on delivery",
    description: "Pay when your order arrives. We’ll call to confirm delivery.",
  },
];

export const statusLabel = (status: OrderStatus) => orderStatuses.find((item) => item.value === status)?.label ?? status;
export const paymentLabel = (method: PaymentMethod) => paymentMethods.find((item) => item.value === method)?.label ?? method;

export const nigerianStates = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta",
  "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT (Abuja)", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina",
  "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers",
  "Sokoto", "Taraba", "Yobe", "Zamfara",
];

export const MAX_LINE_QTY = 20;
