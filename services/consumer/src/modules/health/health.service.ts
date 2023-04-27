import { Injectable } from '@nestjs/common';
import { HealthResponse } from './health.types';

@Injectable()
export class HealthService {
  getHealth(): HealthResponse {
    return { status: 'OK' };
  }
}
