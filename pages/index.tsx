import { useEffect, useState } from "react";
import Image from "next/image";
import { useMutation, useQueries, useQuery } from "@tanstack/react-query";

import { Header, PageTitle, Spinner } from "@/components";
import { recentPublications } from "@/data";
import { RecentPublicationType } from "@/types";
import { AuthRoute } from "@/utils";
import {
  addClientFn,
  deleteClientFn,
  getClientsFn,
  updateClientFn,
} from "@/api";
import { toast } from "react-toastify";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const { data: clients, error } = useQuery({
    queryKey: ["clients", currentPage],
    queryFn: () =>
      getClientsFn({
        start: currentPage * itemsPerPage,
        end: (currentPage + 1) * itemsPerPage - 1,
      }),
  });

  const { isPending, mutateAsync } = useMutation({
    mutationFn: addClientFn,
    onSuccess: (data) => {
      toast.success(data);
    },
    onError: (error) => toast.error(error?.message),
  });

  const handleAddition = () => {
    try {
      mutateAsync();
    } catch (error) {}
  };
  const { mutateAsync: deleteasync } = useMutation({
    mutationFn: deleteClientFn,
    onSuccess: (data) => {
      toast.success(data);
    },
    onError: (error) => toast.error(error?.message),
  });

  const handleDeletion = () => {
    try {
      deleteasync({
        clientId: "2603a1bf-7854-4241-81eb-9adaedf7a810",
      });
    } catch (error) {}
  };
  const { mutateAsync: updateasync } = useMutation({
    mutationFn: updateClientFn,
    onSuccess: (data) => {
      toast.success(data);
    },
    onError: (error) => toast.error(error?.message),
  });

  const handleUpdate = () => {
    try {
      updateasync({
        clientId: "df47ab09-2bb7-4abb-b8f6-9e5d2b3acaa1",
      });
    } catch (error) {}
  };

  const renderRecentPublications = () => {
    if (isLoading) return <Spinner />;

    return recentPublications.map((publication: RecentPublicationType) => {
      return (
        <div key={publication?.id}>
          {/* <p onClick={handleAddition}>Add to Clients</p>
          <p onClick={handleDeletion}>delete client</p>
          <p onClick={handleUpdate}>update client</p> */}
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
