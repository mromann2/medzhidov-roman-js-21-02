import { IS_DARK } from '../constants/actions/IsDark';

export const IsDarkCreator = (isDark: boolean) => ({
    type: IS_DARK,
    isDark,
});
