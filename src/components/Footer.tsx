import React from 'react';
import { createStyles, Container, Group, ActionIcon, Text } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons';
import { DiversityLogo } from '../assets/DiversityLogo';

const useStyles = createStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]}`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function DivFooter() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text
          component="a"
          weight={800}
          size={'xl'}
          variant="gradient"
          style={{ userSelect: 'none', textDecoration: 'none', cursor: 'pointer' }}
        >
          Diversity
        </Text>

        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size={18} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size={18} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size={18} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
