import DashboardLayout from "@/components/DashboardLayout";
import { RecordColumn, columns } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<RecordColumn[]> => {
  return [
    {
      id: 1,
      name: "John Doe",
      gender: "male",
      dob: "12/12/1990",
      phone: "234-567-8901",
      email: "johndow@yahoo.com",
      firsconsultdate: "13/06/2023",
      leadsurgeon: "Dr Smith",
      prodecure: "FUE",
      sugerydate: "14/07/2023",
      assistingNurse: "Felisha",
      duration: "8 hours",
      anasthesiaType: "Barcaine + Adrenaline ",
      preopdiagnosis: "yes",
      postopdiagnosis: "no",
      totalcost: 4000000,
      deposit: 2000000,
      balance: 2000000,
      paidinfull: "no",
      followupdate: "string",
      beforeafterphotos: "no",
    },
    {
      id: 2,
      name: "Jane Doe",
      gender: "female",
      dob: "12/12/1990",
      phone: "234-567-8901",
      email: "johndow@yahoo.com",
      firsconsultdate: "13/06/2023",
      leadsurgeon: "Dr Smith",
      prodecure: "FUE",
      sugerydate: "14/07/2023",
      assistingNurse: "Felisha",
      duration: "8 hours",
      anasthesiaType: "Barcaine + Adrenaline ",
      preopdiagnosis: "yes",
      postopdiagnosis: "no",
      totalcost: 4000000,
      deposit: 2000000,
      balance: 2000000,
      paidinfull: "no",
      followupdate: "string",
      beforeafterphotos: "no",
    },
    {
      id: 3,
      name: "Jane Doe",
      gender: "female",
      dob: "12/12/1990",
      phone: "234-567-8901",
      email: "johndow@yahoo.com",
      firsconsultdate: "13/06/2023",
      leadsurgeon: "Dr Smith",
      prodecure: "FUE",
      sugerydate: "14/07/2023",
      assistingNurse: "Felisha",
      duration: "8 hours",
      anasthesiaType: "Barcaine + Adrenaline ",
      preopdiagnosis: "yes",
      postopdiagnosis: "no",
      totalcost: 4000000,
      deposit: 2000000,
      balance: 2000000,
      paidinfull: "no",
      followupdate: "string",
      beforeafterphotos: "no",
    },
    {
      id: 4,
      name: "Hon Doe",
      gender: "male",
      dob: "12/12/1990",
      phone: "234-567-8901",
      email: "johndow@yahoo.com",
      firsconsultdate: "13/06/2023",
      leadsurgeon: "Dr Smith",
      prodecure: "FUE",
      sugerydate: "14/07/2023",
      assistingNurse: "Felisha",
      duration: "8 hours",
      anasthesiaType: "Barcaine + Adrenaline ",
      preopdiagnosis: "yes",
      postopdiagnosis: "no",
      totalcost: 4000000,
      deposit: 2000000,
      balance: 2000000,
      paidinfull: "yes",
      followupdate: "string",
      beforeafterphotos: "no",
    },
    {
      id: 5,
      name: "Jane Doe",
      gender: "female",
      dob: "12/12/1990",
      phone: "234-567-8901",
      email: "johndow@yahoo.com",
      firsconsultdate: "13/06/2023",
      leadsurgeon: "Dr Smith",
      prodecure: "FUE",
      sugerydate: "14/07/2023",
      assistingNurse: "Felisha",
      duration: "8 hours",
      anasthesiaType: "Barcaine + Adrenaline ",
      preopdiagnosis: "yes",
      postopdiagnosis: "no",
      totalcost: 4000000,
      deposit: 2000000,
      balance: 2000000,
      paidinfull: "no",
      followupdate: "string",
      beforeafterphotos: "no",
    },
  ];
};

const PaymentPage = async () => {
  const data = await getData();
  return (
    <div>
      <DashboardLayout>
        <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
          <h1 className="font-semibold">All Records</h1>
        </div>
        <DataTable columns={columns} data={data} />
      </DashboardLayout>
    </div>
  );
};

export default PaymentPage;
