import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { CnpjResponseDto } from './dto/CnpjResponseDto';

@Injectable()
export class CnpjService {
  constructor(private readonly http: HttpService) {}

  async findCnpj(cnpj: string): Promise<CnpjResponseDto> {
    try {
      const response = await firstValueFrom(
        this.http.get(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`)
      );

      const data = response.data;

      
    const qsaSimplificado = data.qsa ? data.qsa.map(socio => ({
      nome_socio: socio.nome_socio
    })) : [];

      return {
        cnpj: response.data.cnpj,
        pais: response.data.pais,
        email: response.data.email,
        porte: response.data.porte,
        bairro: response.data.bairro,
        numero: response.data.numero,
        ddd_fax: response.data.ddd_fax,
        municipio: response.data.municipio,
        logradouro: response.data.logradouro,
        cnae_fiscal: response.data.cnae_fiscal,
        codigo_pais: response.data.codigo_pais,
        complemento: response.data.complemento,
        codigo_porte: response.data.codigo_porte,
        razao_social: response.data.razao_social,
        nome_fantasia: response.data.nome_fantasia,
        capital_social: response.data.capital_social,
        ddd_telefone_1: response.data.ddd_telefone_1,
        ddd_telefone_2: response.data.ddd_telefone_2,
        opcao_pelo_mei: response.data.opcao_pelo_mei,
        descricao_porte: response.data.descricao_porte,
        codigo_municipio: response.data.codigo_municipio,
        uf: response.data.uf,
        cep: response.data.cep,
        qsa: qsaSimplificado // Incluindo apenas o nome_socio de cada item
      };

    } catch (error) {
      throw new Error('Erro ao buscar CNPJ: ' + error.message);
    }
  }
}
