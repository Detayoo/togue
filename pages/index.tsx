import { useEffect, useState } from "react";
import Image from "next/image";

import { Header, PageTitle, Spinner } from "@/components";
import { recentPublications } from "@/data";
import { RecentPublicationType } from "@/types";
import { AuthRoute } from "@/utils";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const renderRecentPublications = () => {
    if (isLoading) return <Spinner />;

    return recentPublications.map((publication: RecentPublicationType) => {
      return (
        <div key={publication?.id}>
          <div className="relative w-[350px] h-[290px] m:w-[366px] m:h-[290px] ">
            <Image
              src={publication?.thumbnail}
              alt={`publication thumbnail by ${publication?.author}`}
              layout="fill"
              className="hover:scale-110 animation m:hover:scale-75"
            />
          </div>
          <div className="hover:underline cursor-pointer">
            <p className="mt-3 uppercase font-SpaceMono-Bold">
              {publication?.category}
            </p>
            <p className="mt-1">{publication?.title}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <AuthRoute>
      <div className="w-full">
        <PageTitle name="Home" />
        <div className="max-w-[1300px] mx-auto text-white px-10 m:px-0 h-screen">
          <Header />
          <div className="h-[90vh] overflow-y-auto m:px-6 py-5 text-sm">
            <div>
              <p className="font-SpaceMono-Bold mb-6 text-[18px]">
                recent publications
              </p>
              <div className="min-w-[100%] overflow-x-auto flex gap-x-10">
                {renderRecentPublications()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthRoute>
  );
};

export default Home;
