import { createNavigationContainerRef } from '@react-navigation/native';

type Props = {
  Home: undefined;
  Profile: { postId: string };
};

export const navigationRef = createNavigationContainerRef<Props>();

type PendingNav = {
  name: keyof Props;
  params?: any;
} | null;

let pendingNavigation: PendingNav = null;

export function navigate(name: keyof Props, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as any, params);
  } else {
    console.log('NAV NOT READY → storing');
    pendingNavigation = { name, params };
  }
}

export function setNavigationReady() {
  if (pendingNavigation) {
    console.log('RUNNING PENDING NAV');

    navigationRef.navigate(
      pendingNavigation.name as any,
      pendingNavigation.params,
    );

    pendingNavigation = null;
  }
}
