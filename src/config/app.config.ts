interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Design Team Member'],
  tenantName: 'Organization',
  applicationName: 'E-Shirts',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
