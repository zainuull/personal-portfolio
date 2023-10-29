import { LuExternalLink } from 'react-icons/lu';
import Link from 'next/link';
import useSWR from 'swr';
import { fetcher } from '@/lib/swr/fetcher';
import Image from 'next/image';

const ProjectsPage = () => {
  const { data } = useSWR('/api/projects', fetcher);

  return (
    <div className="w-full min-h-screen overflow-hidden bg-primary pb-10">
      <div className="w-full h-full flex flex-col items-center gap-x-4 text-white mt-24">
        <h1 className="text-4xl font-semibold border-b-2 border-secondary">Projects</h1>
        <div className="fw-full flex flex-col mt-8 px-4 gap-y-8">
          {data &&
            data?.data.map((project: any) => (
              <div key={project?.name} className="flex flex-col gap-y-2">
                <div className="group relative cursor-pointer rounded-lg ">
                  <Image
                    src={project?.img}
                    alt={project?.name}
                    height={400}
                    width={400}
                    className="rounded-lg w-[450px] lg:w-[900px]"
                  />
                  <Link
                    href={project?.link}
                    target="_blank"
                    className="absolute opacity-0 w-full h-full top-0 group-hover:bg-black/40 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center gap-y-2">
                    <h1 className="text-4xl font-semibold">{project?.name}</h1>
                    <p className="text-xl font-thin">{project?.fullName}</p>
                  </Link>
                </div>
                <div className="bg-menuSecondary w-[455px] min-h-20 rounded-lg px-4 flex flex-col gap-y-2 pb-4 items-start p-2 lg:w-full">
                  <h1 className="text-2xl font-bold">{project?.name}</h1>
                  <p className="text-sm font-thin">{project?.description}</p>
                  <Link
                    href={project?.link}
                    target="_blank"
                    className="flex items-center gap-x-2 border px-4 py-2 rounded-full mt-2 hover:shadow-xl transition">
                    View Project
                    <LuExternalLink size={20} />
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
