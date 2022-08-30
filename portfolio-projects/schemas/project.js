import { string } from "prop-types";

export default {
    name: 'project',
    type: 'document',
    title: 'Project',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Project Name'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'name',
                maxLength: 200, // will be ignored if slugify is set
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        },
        {
            name: 'date',
            type: 'string',
            title: 'Project Date'
        },
        {
            name: 'brief',
            type: 'string',
            title: 'Project Brief Description'
        },
        {
            name: 'description',
            type: 'array',
            of: [{ type: 'block' }],
            title: 'Project Description'
        },
        {
            name: 'github',
            type: 'string',
            title: 'GitHub Link'
        },
        {
            name: 'mainImage',
            type: 'image',
            title: 'Main Image',
            fields: [
                {
                    name: 'url',
                    type: 'string',
                    title: 'Image URL'
                },
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Image Description'
                }]
        },
    ]
}