export const addAdditionalClass = (additionalClass, defaultClass) => {
    return (additionalClass? `${additionalClass} ${defaultClass}`: `${defaultClass}`);
} 