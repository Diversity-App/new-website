import { Group, MantineTheme, Text, useMantineTheme } from '@mantine/core';
import { NextLink } from '@mantine/next';
import { ComponentPropsWithoutRef } from 'react';

interface DiversityLogoProps extends ComponentPropsWithoutRef<'svg'> {
  variant?: 'white' | 'default' | 'black';
  width?: number;
}

function matchColor(variant: string, theme: MantineTheme) {
  switch (variant) {
    case 'white':
      return '#fff';
    case 'black':
      return '#000';
    case 'default':
      return theme.colors[theme.primaryColor][6];
    default:
      return theme.colors[theme.primaryColor][6];
  }
}

export function DiversityLogo({ variant = 'default', width = 110, ...others }: DiversityLogoProps) {
  const theme = useMantineTheme();

  return (
    <svg {...others} version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 488" width={width} height="488">
      <path
        fillRule="evenodd"
        fill={matchColor(variant, theme)}
        d="m65.5 483.4c-33.5 0-60.8-27.2-60.8-60.8c0-29.2 20.9-54.2 49.3-59.7v-238.5c-27.8-6-47.6-30.5-47.6-59.4c0-33.6 27.3-60.9 60.8-60.9c33.6 0 60.8 27.3 60.8 60.9c0 6.9-1.1 13.6-3.4 20l204.6 118.2c11.5-13 28.3-20.6 45.6-20.6c33.5 0 60.8 27.3 60.8 60.8c0 33.5-27.3 60.8-60.8 60.8c-17.3 0-34.1-7.6-45.6-20.5l-206.2 119c2.2 6.4 3.3 13.1 3.3 19.9c0 33.6-27.3 60.8-60.8 60.8zm-0.3-97.6h-0.3c-20 0.3-36.2 16.8-36.2 36.8c0 20.3 16.5 36.8 36.8 36.8c20.3 0 36.8-16.5 36.8-36.8c0-6.1-1.6-12.2-4.5-17.6l-0.3-0.6q-0.2-0.2-0.3-0.5c-0.8-1.4-1.7-2.7-2.7-4c-6.9-8.8-17.3-14-28.6-14.1h-0.6zm37.9-10.9q1 0.8 2 1.7q0.8 0.7 1.7 1.4q2.1 2 4 4.1l206.4-119.2q0-0.1-0.1-0.1q-0.3-1.1-0.6-2.1q-0.4-1.4-0.8-2.8q-0.3-1.2-0.5-2.5l-0.2-0.8c-0.1-0.5-0.2-1.3-0.3-1.9l3.9-1l-3.9 0.7q-0.1-0.3-0.1-0.6c-0.1-0.6-0.2-1.4-0.3-2.2q0-0.5-0.1-0.9c0-0.5-0.1-1.1-0.1-1.8q-0.1-0.8-0.1-1.6c0-0.5 0-1.2 0-1.9q0-1 0-2.1c0-0.4 0.1-0.9 0.1-1.4q0-1 0.1-1.9c0.1-0.2 0.1-0.5 0.1-0.8q0.1-1 0.3-2.1l0.1-0.9q0.2-1.1 0.4-2.1l0.1-0.6c0.2-0.9 0.3-1.7 0.5-2.6q0.3-1 0.6-2.1q0.1-0.4 0.2-0.7l0.2-0.8q0.2-0.7 0.5-1.4l-204.8-118.2q0 0 0 0c-0.5 0.5-1.1 1.1-1.7 1.7l-0.1 0.2q-0.8 0.7-1.5 1.4c-0.5 0.5-1.1 1.1-1.7 1.6l-0.4 0.3q-0.5 0.4-1 0.8q-0.9 0.8-2 1.6l-0.6 0.5q-0.6 0.4-1.3 0.9c-5.7 4-12 7-18.7 8.8q-1.2 0.4-2.4 0.7h-0.3q-1.4 0.3-2.7 0.6v238.3l0.3 0.1q0.8 0.2 1.6 0.4q0.2 0 0.4 0.1q1.2 0.3 2.3 0.6c1 0.3 2 0.6 3 1q1.3 0.5 2.6 1q1 0.4 1.8 0.7l0.9 0.4q1.2 0.6 2.4 1.2q4.8 2.5 9 5.7l0.3 0.1zm271.6-168.4c-13.1 0-25.3 7.1-31.8 18.4l-0.7 1.2c-2.1 3.8-3.4 8-4 12.4c-0.2 1.6-0.3 3.2-0.3 4.8c0 6.6 1.7 12.9 4.9 18.5c6.6 11.3 18.8 18.3 31.9 18.3c20.3 0 36.8-16.5 36.8-36.8c0-20.3-16.5-36.8-36.8-36.8zm-307.6-178.4c-20.3 0-36.8 16.5-36.8 36.8c0 19.8 16.1 36.3 35.9 36.8c0.4 0 0.7 0 0.9 0q0 0 0 0c12.9 0 25-6.9 31.7-18c3.4-5.7 5.2-12.2 5.2-18.8c0-20.3-16.6-36.8-36.9-36.8z"
      />
      <path
        fillRule="evenodd"
        fill={matchColor(variant, theme)}
        d="m132 65c0 6.2-0.8 12.3-2.6 18.2l199.1 114.9c12.1-12.3 28.9-19.5 46.3-19.5c35.7 0 64.8 29.1 64.8 64.8c0 35.8-29.1 64.8-64.8 64.8c-17.4 0-34.2-7.2-46.3-19.5l-200.7 115.9c1.6 5.8 2.5 11.9 2.5 18c0 35.8-29.1 64.8-64.8 64.8c-35.7 0-64.8-29-64.8-64.8c0-30 20.7-55.9 49.3-62.9v-232.2c-28-7.5-47.6-32.8-47.6-62.5c0-35.8 29.1-64.9 64.8-64.9c35.8 0 64.8 29.1 64.8 64.9zm-121.6 0c0 28.4 20.4 51.8 47.6 56.1v245.2c-27.8 3.7-49.3 27.6-49.3 56.3c0 31.4 25.5 56.8 56.8 56.8c31.3 0 56.8-25.4 56.8-56.8c0-7.4-1.5-14.8-4.3-21.6l212.1-122.5c10.7 13.6 27.2 21.7 44.7 21.7c31.3 0 56.8-25.5 56.8-56.8c0-31.3-25.5-56.8-56.8-56.8c-17.5 0-34 8.2-44.7 21.7l-210.4-121.5c2.8-6.9 4.3-14.3 4.3-21.8c0-31.4-25.5-56.9-56.8-56.9c-31.3 0-56.8 25.5-56.8 56.9zm76.3 305q-1.2-0.5-2.4-0.9c-0.9-0.4-1.9-0.7-2.8-0.9q-1.2-0.4-2.3-0.7c-0.1 0-0.1 0-0.2 0q-1.2-0.3-2.4-0.6q0 0-0.1 0q-1.3-0.2-2.5-0.4v-245.1q0.3-0.1 0.6-0.1q2.6-0.4 5.2-1q1.3-0.3 2.5-0.6c6.3-1.7 12.2-4.6 17.6-8.3q0.8-0.6 1.7-1.3q1-0.7 1.9-1.5q0.6-0.5 1.3-1q0.8-0.8 1.6-1.5q0.7-0.7 1.4-1.4q0.8-0.9 1.6-1.7q1.1-1.2 2.1-2.4l210.6 121.6q-0.2 0.5-0.4 1q-0.1 0.1-0.1 0.2c-0.2 0.6-0.4 1.1-0.6 1.7q-0.3 0.9-0.5 1.7c-0.1 0.4-0.3 0.7-0.3 1.1q-0.3 1-0.6 2q-0.3 1.2-0.5 2.4q-0.1 0.3-0.1 0.6q-0.2 1-0.4 2q0 0.3 0 0.5q-0.2 1.1-0.3 2.3q-0.1 0.4-0.1 0.8q-0.1 0.8-0.1 1.6q-0.1 0.7-0.1 1.4q0 0.9 0 1.9q0 1 0 2q0 0.6 0.1 1.3q0 0.8 0.1 1.7q0 0.4 0.1 0.8q0.1 1.1 0.3 2.2q0 0.3 0 0.5q0.2 1 0.4 2q0 0.4 0.1 0.7q0.2 1.2 0.5 2.3q0.3 1.4 0.7 2.7q0.3 1 0.7 2.1q0 0 0 0.1q0.2 0.4 0.3 0.9q0.4 1 0.8 2l-212.2 122.5c-1.8-2.2-3.7-4.3-5.8-6.2q-0.8-0.7-1.6-1.4q-1-0.9-2-1.6q0-0.1-0.1-0.1q-4.2-3.3-8.9-5.7q-1.1-0.6-2.3-1.1q0 0 0 0q-1.2-0.6-2.5-1.1zm252.8-106.1c-3.6-6.2-5.5-13.3-5.5-20.5q0-2.7 0.4-5.4c0.6-4.8 2.1-9.5 4.4-13.9q0.3-0.5 0.7-1.1c7.3-12.6 20.8-20.4 35.3-20.4c22.5 0 40.8 18.3 40.8 40.8c0 22.5-18.3 40.8-40.8 40.8c-14.5 0-28.1-7.8-35.3-20.3zm-314.8 158.7c0-22.3 17.9-40.4 40.2-40.8q0.2 0 0.4 0h0.6c12.6 0.2 24.1 5.9 31.7 15.7q1.7 2 3 4.4q0.4 0.6 0.7 1.2c3.3 5.9 5 12.7 5 19.5c0 22.5-18.3 40.8-40.8 40.8c-22.5 0-40.8-18.3-40.8-40.8zm41.5-316.8c-22-0.6-39.8-18.9-39.8-40.8c0-22.5 18.3-40.9 40.8-40.9c22.5 0 40.8 18.4 40.8 40.9c0 7.3-2 14.6-5.7 20.9c-7.4 12.2-20.8 19.9-35.1 19.9c-0.3 0-0.6 0-1 0zm1-8c11.5 0 22.3-6.2 28.2-16c3-5.1 4.6-10.9 4.6-16.8c0-18.1-14.7-32.9-32.8-32.9c-18.1 0-32.8 14.8-32.8 32.9c0 17.6 14.3 32.3 32 32.8h0.1c0.3 0 0.5 0 0.7 0q0 0 0 0zm42.8 15.8l-0.4 0.3q-0.5 0.5-1 0.9c-0.8 0.6-1.5 1.2-2.2 1.8l-0.5 0.3q-0.7 0.6-1.5 1.1c-6.1 4.3-12.8 7.4-19.9 9.4q-1.2 0.3-2.5 0.6v232q0.9 0.2 1.6 0.4c1.2 0.4 2.3 0.8 3.3 1.1h0.1q1.3 0.5 2.6 1l0.1 0.1h0.1q0.5 0.2 1.1 0.5h0.1l1.6 0.7q1.3 0.6 2.6 1.3c3.5 1.8 6.8 3.9 9.8 6.2q0.3 0.2 0.7 0.5q1.1 0.9 2 1.7q0.9 0.8 1.7 1.5l0.1 0.1q1 1 2 1.9l200.9-116q-0.3-1.1-0.5-2.1q-0.4-1.4-0.6-2.8h-0.1v-0.1v-0.3l-0.1-0.2q-0.2-1.2-0.3-2.2l-0.1-0.2v-0.1q0-0.3-0.1-0.6q-0.1-1.1-0.3-2.4q0-0.4 0-0.9q-0.1-0.9-0.2-1.9q-0.1-0.8-0.1-1.7q0-1 0-2.1q0-1 0-2.1q0-0.8 0.1-1.7q0.1-0.9 0.2-1.9q0-0.4 0-0.9q0.2-1.3 0.3-2.3v-0.1q0.1-0.3 0.1-0.5v-0.2v-0.1q0.2-1 0.4-2.3l0.1-0.2v-0.3v-0.1l0.1-0.1q0.2-1.3 0.5-2.6q0.3-1.1 0.6-2.2l-199.3-115.1q-0.6 0.6-1.2 1.2c-0.7 0.7-1.3 1.2-1.9 1.7zm232.3 125.5c-0.2 1.4-0.3 2.9-0.3 4.3c0 5.8 1.5 11.5 4.4 16.4c5.8 10.1 16.7 16.4 28.4 16.4c18.1 0 32.8-14.7 32.8-32.8c0-18.1-14.7-32.8-32.8-32.8c-11.7 0-22.5 6.3-28.4 16.4l-0.3 0.5l-0.3 0.5q-2.8 5.2-3.5 11.1zm-244 183.5c0-5.5-1.4-10.9-4-15.7l-0.3-0.5q-0.1-0.2-0.3-0.5c-0.7-1.2-1.5-2.4-2.4-3.5c-6.1-7.9-15.4-12.5-25.5-12.6h-0.1h-0.1h-0.1h-0.5c-17.8 0.3-32.3 15-32.3 32.8c0 18.1 14.7 32.8 32.8 32.8c18.1 0 32.8-14.7 32.8-32.8z"
      />
    </svg>
  );
}
