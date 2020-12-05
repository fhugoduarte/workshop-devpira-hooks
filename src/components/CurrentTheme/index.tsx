import { useTheme } from '../../hooks';

function CurrentTheme() {
  const { theme } = useTheme();

  return (
    <h1>{theme}</h1>
  )
}

export default CurrentTheme;