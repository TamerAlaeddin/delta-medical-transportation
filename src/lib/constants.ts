export const COMPANY_INFO = {
  name: "Delta Medical Transportation",
  tagline: "Travel safe, travel with us.",
  phone: "(973) 389-3110",
  fax: "(973) 333-3111",
  email: "deltamedicalnj@gmail.com",
  address: "New Jersey",
  instagram: "https://www.instagram.com/deltamedical_transportation_/",
} as const;

export const CONTACT_METHODS = [
  {
    type: "phone",
    label: "Call Us",
    value: COMPANY_INFO.phone,
    href: `tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`,
  },
  {
    type: "fax",
    label: "Fax",
    value: COMPANY_INFO.fax,
  },
  {
    type: "email",
    label: "Email",
    value: COMPANY_INFO.email,
    href: `mailto:${COMPANY_INFO.email}`,
  },
];
