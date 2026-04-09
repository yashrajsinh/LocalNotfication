import { createNavigationContainerRef } from '@react-navigation/native';
//props type
type Props = {
  Home: undefined;
  Profile: { postId: string };
};
let isReady = false;
export const navigationRef = createNavigationContainerRef<Props>();
export function setNavigationReady() {
  isReady = true;
}

export function navigate(name: keyof Props, params?: any) {
  if (isReady && navigationRef.isReady()) {
    navigationRef.navigate(name as any, params);
  }
}
