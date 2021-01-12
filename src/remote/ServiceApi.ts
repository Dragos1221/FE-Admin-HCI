import axios, { AxiosInstance } from 'axios';

class ServiceApi {
    private instance: AxiosInstance;
    constructor() {
    	this.instance = axios.create({
            baseURL:'http://localhost:3000',
    	});

    }

    async getJobs() {
    	return this.instance.get('/admin/jobs');
    }

    async getCv(id:any) {
    	return this.instance.get('http://localhost:3000/admin/cvs/forjob/'+id);
    }

    async getJobById(id:any) {
    	return this.instance.get('http://localhost:3000/admin/cvs/'+id);
    }

    async updateCv(body:any) {
    	return this.instance.post('http://localhost:3000/admin/jobs/test',body);
    }

    async getXcel(body:any) {
    	return this.instance.post('http://localhost:3000/admin/jobs/excel',body);
    }
}
export default ServiceApi;