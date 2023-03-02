import Banner from "@/common/components/banner";
import BalanceCard from "@/common/components/card/balanceCard";
import AppLayout from "@/common/layouts";
import React from "react";
import ValidatorsTable from "widgets/validators";

export default function ValidatorsInCollections() {
  return (
    <AppLayout breadcrumbs="Coin Burea" headerTitle="Collectionsu /">
      <BalanceCard />
      <div className="py-5">
        <Banner
          title="Collection"
          label="dolor sit amet, consectetur adipiscing elit. Libero velit
          aliquet non habitasse eu mauris"
        />
      </div>

      <ValidatorsTable />
    </AppLayout>
  );
}
