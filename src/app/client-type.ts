export interface ClientType {
  id: string;
  name: string;
  url: string;
  picture: string;
  description: string;
  tags: object;
  services: Array<string>;
  print: object;
}
