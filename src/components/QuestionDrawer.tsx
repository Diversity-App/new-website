import React from 'react';
import { createStyles, Image, Accordion, Grid, Col, Container, Title } from '@mantine/core';
import { Trans, useTranslation } from 'next-i18next';
import image from '../assets/faq.svg';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
  },

  title: {
    marginBottom: theme.spacing.md,
    paddingLeft: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  item: {
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
  },
}));

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.';

export function FAQ() {
  const { t } = useTranslation(['index']);
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <Grid id="faq-grid" gutter={50}>
          <Col span={12} md={6}>
            <Image src={image.src} alt={t('faq.title')} />
          </Col>
          <Col span={12} md={6}>
            <Title order={2} align="left" className={classes.title}>
              {t('faq.title')}
            </Title>

            <Accordion iconPosition="right" initialItem={0}>
              <Accordion.Item label={t('faq.datastored.title')} className={classes.item}>
                {t('faq.datastored.description')}
              </Accordion.Item>
              <Accordion.Item label={t('faq.accountsecure.title')} className={classes.item}>
                {t('faq.accountsecure.description')}
              </Accordion.Item>
              <Accordion.Item label={t('faq.integratedplatforms.title')} className={classes.item}>
                <Trans i18nKey="faq.integratedplatforms.description" t={t} components={[<b />]} />
              </Accordion.Item>
            </Accordion>
          </Col>
        </Grid>
      </Container>
    </div>
  );
}
