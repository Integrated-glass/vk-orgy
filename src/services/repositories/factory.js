import request from '../request';

export default resource => ({
    index(query) {
        return request.get(`/${resource}/`, { params: query });
    },

    indexInPath(path, query) {
        return request.get(`/${resource}/${path}/`, {params: query});
    },

    postInPath(path, payload) {
        return request.post(`/${resource}/${path}/`, payload);
    },

    postInResourcePath(id, path, payload) {
        return request.post(`/${resource}/${id}/${path}/`, payload);
    },

    create(payload) {
        return request.post(`/${resource}/`, payload);
    },

    show(id) {
        return request.get(`/${resource}/${id}/`);
    },

    showInPath(path, id) {
        return request.get(`/${resource}/${path}/${id}/`);
    },

    showPathInPath(path1, id, path2){
        return request.get(`/${resource}/${path1}/${id}/${path2}`);
    },

    postPathInPath(path1, id, path2){
        return request.post(`/${resource}/${path1}/${id}/${path2}/`);
    },

    showPath(id, path) {
        return request.get(`/${resource}/${id}/${path}/`);
    },

    update(payload) {
        return request.put(`/${resource}/`, payload);
    },
    
    updateInPath(path, payload) {
        return request.put(`/${resource}/${path}/`, payload);
    },
    
    delete(id) {
        return request.delete(`/${resource}/${id}/`);
    },

    deleteInPath(path, id) {
        return request.delete(`/${resource}/${path}/${id}/`);
    }
});
