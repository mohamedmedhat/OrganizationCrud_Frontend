export interface IGetAllOrganizationsResponse {
  organizations: [
    {
      _id: string;
      name: string;
      description: string;
      members: [
        {
          user: {
            _id: string;
            name: string;
            email: string;
          };
          access_level: string;
          _id: string;
        }
      ];
      createdAt: Date;
      updatedAt: Date;
      __v: number;
    }
  ];
  total_organizations: number;
}

export interface IOrganizationResponse {
  _id: string;
  name: string;
  description: string;
  members: [
    {
      user: {
        _id: string;
        name: string;
        email: string;
      };
      access_level: string;
      _id: string;
    }
  ];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface IMemberResponse {
  user: {
    _id: string;
    name: string;
    email: string;
  };
  access_level: string;
  _id: string;
}
