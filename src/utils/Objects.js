/**
 * 对象是否为空
 * @param {obj}} obj 检验参数 
 */
export function isNull(obj){
    /**
     * 基础类型:
     * string
     * number
     * boolean
     * undefined
     * null
     * 
     * 复杂类型:
     * function
     * object []
     * object {}
     * object null
     */
    if (obj) {
        /**
         * 复杂类型判断: 
         */
        // 1. [] & {} & '   ', 不考虑null的情况, 应在第一层 == 判断中过滤
        if (obj instanceof Array || obj instanceof Object) {
            return Object.keys(obj).length == 0;
        }
        // 2. '   '
        else if (typeof obj === 'string') {
            return obj.trim().length == 0;
        }
        // 3. 识别不出的数据类型
        else {
            throw new Exception("unrecognize type");
        }
    }   
    else {
        /**
         *   基础类型判断: 在js的if判断中, 解释器默认就是通过 == 进行判断, 而非 ===.
         * 
         *   == 比较下为false的值:
         * 
         *   1. '' = false;
         *   2. 0 = false;
         *   3. undefined = false;
         *   4. false = false;
         *   5. null = false;
         */
        return true;
    }
}