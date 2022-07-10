import {ImageStore} from 'react-native';
import {Region} from 'react-native-maps';

export interface Place {
  id: number;
  description: string;
  coordinates: Region;
  title: string;
  categoryImage: any;
  category: string;
  image: string;
}
