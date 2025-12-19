import { Injectable, HttpException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ProductsService {
    private readonly base = 'https://strapi-production-2ff5.up.railway.app';
    private readonly listUrl = `${this.base}/api/creatine-products?populate=*`;
    private itemUrl = (id: string) =>
        `${this.base}/api/creatine-products/${id}?populate=*`;

    constructor(private readonly http: HttpService) {}

    private abs(url?: string | null): string | null {
        if (!url) return null;
        return url.startsWith('http') ? url : `${this.base}${url}`;
    }

    private mapImage(img: any) {
        if (!img) return null;
        const formats = img.formats || {};
        return {
            url: this.abs(img.url),
            width: img.width,
            height: img.height,
            formats: {
                thumbnail: formats.thumbnail
                    ? {
                            url: this.abs(formats.thumbnail.url),
                            width: formats.thumbnail.width,
                            height: formats.thumbnail.height,
                        }
                    : null,
                small: formats.small
                    ? {
                            url: this.abs(formats.small.url),
                            width: formats.small.width,
                            height: formats.small.height,
                        }
                    : null,
                medium: formats.medium
                    ? {
                            url: this.abs(formats.medium.url),
                            width: formats.medium.width,
                            height: formats.medium.height,
                        }
                    : null,
                large: formats.large
                    ? {
                            url: this.abs(formats.large.url),
                            width: formats.large.width,
                            height: formats.large.height,
                        }
                    : null,
            },
        };
    }

    private mapItem(it: any) {
        return {
            id: it.id,
            documentId: it.documentId,
            title: it.title,
            description: it.description,
            price: it.price,
            stock: it.stock,
            createdAt: it.createdAt,
            updatedAt: it.updatedAt,
            publishedAt: it.publishedAt,
            image: this.mapImage(it.image),
        };
    }

    async getProducts() {
        const response = await firstValueFrom(this.http.get(this.listUrl));
        const json = response.data;
        const data = Array.isArray(json?.data) ? json.data.map((it: any) => this.mapItem(it)) : [];
        return { data, meta: json?.meta ?? null };
    }

    async getProduct(id: string) {
        const response = await firstValueFrom(this.http.get(this.itemUrl(id)));
        const json = response.data;
        const item = json?.data ? this.mapItem(json.data) : null;
        return { data: item, meta: json?.meta ?? null };
    }
}
