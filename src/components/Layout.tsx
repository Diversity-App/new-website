import { AppShell, Footer, Header } from '@mantine/core';
import { useTranslation } from 'next-i18next';
import { DivFooter } from './Footer';
import { HeaderResponsive } from './Header';

export default function Layout(props: any) {
  const { t } = useTranslation('common');
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
                label: t('home'),
              },
            ]}
          />
        </Header>
      }
      footer={
        <Footer height={80}>
          <DivFooter />
        </Footer>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
    >
      {props.children}
    </AppShell>
  );
}
