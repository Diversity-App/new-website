import React from 'react';
import { Container, Divider } from '@mantine/core';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HomePageHero from '../components/HomePageHero';
import MemberCarousel from '../components/MembersCarousel';
import MailchimpSubscribeForm from '../components/MailchimpSubscribe';
import StatsGroup from '../components/StatsComponent';
import { FAQ } from '../components/QuestionDrawer';

export function HomePage() {
  return (
    <div>
      <Container>
        <HomePageHero />
        <StatsGroup />
        <FAQ />
        <Divider my="xl" variant="dotted" size="sm" />
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
