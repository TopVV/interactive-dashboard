"use client";

import { Typography } from "@/components";
import {
  SearchInput,
  ContentTabs,
  ModalsContainer,
  RequestAccessButton,
} from "@/containers";

const Home = () => (
  <main className="relative flex h-full w-full flex-col items-center gap-10 bg-slate-100 px-[15%] py-8">
    <RequestAccessButton />
    <Typography variant="h1">Library</Typography>
    <Typography variant="subtitle1">
      Browse for assets needed to report and present analysis.
    </Typography>
    <SearchInput />
    <ContentTabs />
    <ModalsContainer />
  </main>
);

export default Home;
