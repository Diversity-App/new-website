// import Swiper core and required modules
import { Pagination, A11y, Keyboard, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import React from 'react';
import { createStyles, Avatar, Text, Group, Card, Anchor } from '@mantine/core';
import { IconAt, IconBrandLinkedin } from '@tabler/icons';
import { Members } from '../Constants';

const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

interface UserInfoIconsProps {
  avatar: string;
  name: string;
  title: string;
  linkedin: string;
  email: string;
}

export function UserInfoIcons({ avatar, name, title, linkedin, email }: UserInfoIconsProps) {
  const { classes } = useStyles();
  return (
    <div style={{ margin: 'auto', marginBottom: 40 }}>
      <Group noWrap>
        <Avatar src={avatar} size={94} radius="md" />
        <div>
          <Text size="xs" sx={{ textTransform: 'uppercase' }} weight={700} color="dimmed">
            {title}
          </Text>
          <Text size="lg" weight={500} className={classes.name}>
            {name}
          </Text>

          <Group noWrap spacing={10} mt={3}>
            <IconBrandLinkedin size={16} className={classes.icon} />
            <Anchor href={linkedin} target="_blank">
              <Text size="xs" color="dimmed">
                {name}
              </Text>
            </Anchor>
          </Group>

          <Group noWrap spacing={10} mt={5}>
            <IconAt size={16} className={classes.icon} />
            <Anchor href={`mailto:${email}`}>
              <Text size="xs" color="dimmed">
                {email}
              </Text>
            </Anchor>
          </Group>
        </div>
      </Group>
    </div>
  );
}

export default function MemberCarousel() {
  return (
    <Swiper
      modules={[Pagination, A11y, Keyboard, Autoplay]}
      style={{
        maxWidth: '100%',
        maxHeight: '100vh',
      }}
      slidesPerView={1}
      autoplay={{ delay: 8000 }}
      keyboard
      loop
      pagination={{ clickable: true }}
    >
      {Members.map((member) => (
        <SwiperSlide key={member.name}>
          <UserInfoIcons {...member} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
