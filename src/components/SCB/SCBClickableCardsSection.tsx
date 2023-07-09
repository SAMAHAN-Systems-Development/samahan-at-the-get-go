import SCBOfficers from "src/data/SCBOfficers.json";

import SCBOfficerCard from "@/components/ui/SCB/SCBOfficerCard";

interface SCBOfficer {
  position: string;
  firstName: string;
  lastName: string;
  yearSection: string;
  imageUrl: string;
}

const SCBClickableCardsSection = () => {
  return (
    <section className="bg-blue p-5">
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-1">
        {SCBOfficers.SCBOfficers.map(
          (SCBOfficer: SCBOfficer, index: number) => {
            return (
              <div
                key={SCBOfficer.firstName}
                className={`flex ${
                  index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
                } sm:justify-center`}
              >
                <SCBOfficerCard
                  firstName={SCBOfficer.firstName}
                  lastName={SCBOfficer.lastName}
                  position={SCBOfficer.position}
                  imageUrl={SCBOfficer.imageUrl}
                  link="/"
                />
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default SCBClickableCardsSection;
