export class CnpjResponseDto {
    cnpj: string;
    pais: string | null;
    email: string | null;
    porte: string;
    bairro: string;
    numero: string;
    ddd_fax: string;
    municipio: string;
    logradouro: string;
    cnae_fiscal: number;
    codigo_pais: string | null;
    complemento: string;
    codigo_porte: number;
    razao_social: string;
    nome_fantasia: string;
    capital_social: number;
    ddd_telefone_1: string;
    ddd_telefone_2: string;
    opcao_pelo_mei: boolean | null;
    descricao_porte: string;
    codigo_municipio: number;
    uf: string;
    cep: string;
    qsa: { nome_socio: string }[]; // Array contendo apenas o nome_socio de cada sócio
  }