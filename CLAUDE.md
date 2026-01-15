# App Template

Expo template with pre-built components and patterns.

## Setup

Update `app.json`:
```json
{
  "expo": {
    "name": "App Name",
    "slug": "appname",
    "icon": "./assets/icon.png",
    "android": {
      "package": "com.vandam.appname"
    }
  }
}
```

Delete `/android` folder before first build (regenerates with your config).

## Commands
- `bunx expo run:android` - Build and run
- `bun start` - Start dev server

## Components (Ready to Use)

| Component | Purpose |
|-----------|---------|
| `ContentContainer` | Page wrapper with header, handles background color |
| `StyledText` | Theme-aware text with custom font |
| `StyledButton` | Button with haptic feedback |
| `HapticPressable` | Pressable with haptic feedback |
| `Header` | Top bar with title, back button, icons |
| `Navbar` | Bottom tab navigation |
| `CustomScrollView` | FlatList with custom scroll indicator |
| `ToggleSwitch` | On/off toggle |

## Styling with `n()`

**Always use `n()` for sizes** - normalizes across screen densities:
```tsx
import { n } from "@/utils/scaling";

const styles = StyleSheet.create({
  container: { padding: n(16) },
  text: { fontSize: n(18) },
  icon: { width: n(24), height: n(24) }
});
```

## Tabs

Configure in `app/(tabs)/_layout.tsx`:
```tsx
export const TABS_CONFIG: ReadonlyArray<TabConfigItem> = [
  { name: "Home", screenName: "index", iconName: "home" },
  { name: "Search", screenName: "search", iconName: "search" },
  { name: "Settings", screenName: "settings", iconName: "settings" },
] as const;
```

Add new tab: create file in `app/(tabs)/`, add to config.

## Settings Pattern

Settings use nested routes:
```
app/(tabs)/settings.tsx      → Main settings page
app/settings/customise.tsx   → Customise options
app/settings/some-option.tsx → Individual setting page
```

Navigate with `router.push("/settings/customise")`.

## Contexts

Wrapped in `app/_layout.tsx`:
- `InvertColorsContext` - Theme toggle (black/white), persists to AsyncStorage
- `HapticContext` - `useHaptic()` returns function to trigger feedback

Use: `const { invertColors } = useInvertColors();`

## Rules
- Use `n()` for all numeric style values
- Use `bun` instead of npm
- Minimize `useEffect` - see [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)
- Readable code > comments
