import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { AppShell } from "@mantine/core";
import React from "react";
import Sidebar from '@/components/sidebar/sidebar';
interface Props {
  children: React.ReactNode;
}
export function HomePage(props:Props) {
  return (
    <>
      <AppShell>
        {
          <div>
            <Sidebar />
          </div>
        }
        {}
        <div>{props.children}</div>
      </AppShell>
    </>
  );
}

interface Props {
  children: React.ReactNode;
}

