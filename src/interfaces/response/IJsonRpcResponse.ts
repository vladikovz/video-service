export interface IJsonRpcResponse<T=unknown> {
    results: T;
    page: number;
    total_pages: number;
    total_results: number;
}
