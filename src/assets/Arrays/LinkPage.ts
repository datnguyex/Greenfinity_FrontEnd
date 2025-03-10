import { TFunction } from 'i18next';

export const topAddressArr = (t: TFunction) => [
    { to: '/tram-greez', label: t('station') },
    { to: '/the-gioi-tai-sinh', label: t('wordReborn') },
    { to: '/thang-dong-gop', label: t('contributeLadder') },
    { to: '/ban-do', label: t('map') },
    { to: '/mini-game', label: t('miniGame') },
];
export const bottomAddressArr = (t: TFunction) => [
    { to: '/cua-hang', label: t('store') },
    { to: '/cau-chuyen', label: t('story') },
];
