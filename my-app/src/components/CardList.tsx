import Link from "next/link";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";

const pendingPayment = [
  {
    id: "MC-2025-11-001",
    title: "Outstanding Payments",
    name: "Yusuf Ibrahim",
    age: 30,
    sugery_date: 2025 - 11 - 15,
    followup: "2025-12-15",
    balance: 700000,
  },
  {
    id: "MC-2025-11-002",
    title: "Outstanding Payments",
    name: "David John",
    age: 30,
    sugery_date: 2025 - 5 - 15,
    followup: "2025-6-15",
    balance: 0,
  },
  {
    id: "MC-2025-11-003",
    title: "Outstanding Payments",
    name: "Emmanual Edem",
    age: 30,
    sugery_date: 2025 - 6 - 17,
    followup: "2025-7-17",
    balance: 300000,
  },
];
const fullPayment = [
  {
    id: "MC-2025-11-004",
    title: "Full Payment",
    name: "Jude Itua",
    age: 30,
    sugery_date: 2025 - 1 - 15,
    followup: "2025-2-15",
    balance: 500000,
  },
  {
    id: "MC-2025-11-001",
    title: "Full Payment",
    name: "Fatima Zakari",
    age: 30,
    sugery_date: 2025 - 5 - 15,
    followup: "2025-6-15",
    balance: 1000000,
  },
  {
    id: "MC-2025-11-001",
    title: "Full Payment",
    name: "Illiasu Abubakar",
    age: 30,
    sugery_date: 2025 - 11 - 8,
    followup: "2025-12-8",
    balance: 0,
  },
];

const CardList = ({ title }: { title: string }) => {
  const lists = title === "Outstanding Payments" ? pendingPayment : fullPayment;
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">{title}</h1>
      <div className="flex flex-col gap-2">
        {lists.map((item) => (
          <Card
            key={item.id}
            className="flex-row items-center justify-between gap-4"
          >
            <CardContent className="space-y-1 justify-center">
              <CardTitle> {item.name}</CardTitle>
              <Badge>{item.id}</Badge>
              <Badge>{item.followup}</Badge>
            </CardContent>
            <CardFooter>{item.balance / 1000}K</CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardList;
