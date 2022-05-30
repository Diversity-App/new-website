import { AppShell, Header } from '@mantine/core';
import { HeaderResponsive } from './Header';

export default function Layout(props: any) {
  return (
    <AppShell
      padding="md"
      header={
        <Header height={60} p="xs">
          <HeaderResponsive
            links={[
              {
                //TODO: Add links to the other pages
                link: '/',
                label: 'Accueil',
              },
            ]}
          />
        </Header>
      }
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      {props.children}
    </AppShell>
  );
}
