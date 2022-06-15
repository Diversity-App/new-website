import React from 'react';
import { Container, Grid, Image, SimpleGrid, useMantineTheme } from '@mantine/core';

const PRIMARY_COL_HEIGHT = 300;

export function Mockups() {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

  return (
    <Container my="md">
      <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <Image src="/images/mockups/Menu.png" height={PRIMARY_COL_HEIGHT} />
        <Grid gutter="md">
          <Grid.Col>
            <Image
              height={SECONDARY_COL_HEIGHT}
              src="/images/mockups/Connect.png"
              alt="Connect 1"
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Image height={SECONDARY_COL_HEIGHT} src="/images/mockups/Login.png" alt="Connect 1" />
          </Grid.Col>
          <Grid.Col span={6}>
            <Image height={SECONDARY_COL_HEIGHT} src="/images/mockups/Sport.png" alt="Connect 1" />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}
