import React from 'react';
import { Container, Divider, Title } from '@mantine/core';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HomePageHero from '../components/HomePageHero';
import MemberCarousel from '../components/MembersCarousel';
import MailchimpSubscribeForm from '../components/MailchimpSubscribe';
import StatsGroup from '../components/StatsComponent';

export function HomePage() {
  const { t } = useTranslation(['index']);
  const stats: { title: string; stats: string; description: string }[] = [
    {
      title: t('stats.active.title'),
      stats: '49,6M',
      description: t('stats.active.description'),
    },
    {
      title: t('stats.time.title'),
      stats: '2h25',
      description: t('stats.time.description'),
    },
    {
      title: t('stats.perperson.title'),
      stats: '8.4',
      description: t('stats.perperson.description'),
    },
    {
      title: t('stats.diversified.title'),
      stats: '47%',
      description: t('stats.diversified.description'),
    },
  ];

  return (
    <div>
      <Container>
        <HomePageHero />
        <StatsGroup data={stats} />
        <Divider my="xl" variant="dotted" size="sm" />
        <Title order={3} mb="xl">
          {t('aboutus')}
        </Title>
        <MemberCarousel />
        <MailchimpSubscribeForm />
      </Container>
    </div>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['index', 'common'])),
      // Will be passed to the page component as props
    },
  };
}

export default HomePage;
