import { BDModel } from './BDModel';

export interface Venta extends BDModel {
  venta: {
    importe: number;
    producto: string;
  };
}
