'use server'
import { productType } from "@/lib/interface";
import { defineOneEntry } from "oneentry"
import { IFormsEntity } from "oneentry/dist/forms/formsInterfaces";
import { IProductEntity } from "oneentry/dist/products/productsInterfaces";
const {
    Admins,
    AttributesSets,
    AuthProvider,
    Blocks,
    Events,
    Forms,
    FormData,
    FileUploading,
    GeneralTypes,
    IntegrationCollections,
    Locales,
    Menus,
    Orders,
    Pages,
    Products,
    ProductStatuses,
    System,
    Templates,
    TemplatePreviews,
    Users,
    WS,
} = defineOneEntry('https://embark-project.oneentry.cloud', {token: process.env.ONEENTRY_TOKEN, langCode: 'en'})

//Get all data from a page by url
export async function getPageData(url:string) {
    const value = await Pages.getPageByUrl(url, 'en_US');
    const bannerData = {
        title: value.attributeValues?.maintitle.value,
        image: value.attributeValues?.mainimage.value[0].downloadLink 
    }
    if(value.attributeValues?.hasOwnProperty('categoriestitle') && value.attributeValues?.categoriestitle.value != '') {
        const categoriesData = {
            titles: value.attributeValues?.categoriestitle.value.split(','),
            images: value.attributeValues?.categoriesimage.value.map((item:any) => item.downloadLink),
            links: value.attributeValues?.categorieslink.value.split(',')
        }
        const categoriesObject = categoriesData.titles.map((title: string, index: any) => ({
            id: 'cate'+title,
            title: title.toLocaleUpperCase(),
            imgSrc: categoriesData.images[index],
            url: categoriesData.links[index]
        }))
    return {bannerData, categoriesObject}
    }
    return {bannerData}
}

//helper function to parse product
const parseProductObjects = (value: any) => {
    const products: productType[] = value.map((product: IProductEntity) => ({
        id: product.id,
        src: product.attributeValues.images.value[0].downloadLink,
        title: product.attributeValues.title.value,
        price: product.attributeValues.price.value,
        quantity: product.attributeValues.quantity.value,
        description: product.attributeValues.description.value,
        images: product.attributeValues.images.value.map((v:any)=> v.downloadLink),
        categories: product.attributeValues.categories.value,
    }))
    return products
}

export async function getProductByCategory(url: string) {
    const body = [
        {
            'attributeMarker': 'price',
            'conditionMarker': 'mth',
            'conditionValue': 1,
        }
    ]
    const value = await Products.getProductsByPageUrl(url, body, 'en_US')
    // console.log('Products response:', value); 
    const products = parseProductObjects(value.items)
    return products
}

export async function getProductByID(id: number) {
    const value = await Products.getProductById(id, 'en_US')
    const products = parseProductObjects([value])
    return products
}

export const parseCartDetail = async (cartDetails: any) => {
    let result = Object.keys(cartDetails).map(key => {
        let item = cartDetails[key];
        return {
            id: item.id,
            name: item.name,
            description: item.description,
            price: item.price,
            quantity: item.quantity,
            image: item.image
        };
    });
    let total = result.reduce((acc, item) => {
        return acc + (item.price * item.quantity);
    },0)
    return {result, total}
}

const parseFormDetails = (form: IFormsEntity) => {
    const formFields = form.attributes.map((att)=>att.localizeInfos.title)
    return formFields
}

export async function getFormByMarker (marker: string) {
    const value = await Forms.getFormByMarker(marker, 'en_US')
    const formFields = parseFormDetails(value)
    return formFields
}

