export interface Result {
  card_type: string;
  id: number;
  city: string;
  street: string;
  county: string;
  rooms: number;
  area: number;
  rent: number;
  status: string;
  get_first_image: string;
  longitude: number;
  latitude: number;
  date_publish: string;
  overlay_image: string;
  distanceToOffice: number;
  durationToOffice: number;
  walk: number;
  transit: number;
  noOfTransits: number;
}
