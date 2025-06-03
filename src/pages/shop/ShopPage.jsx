'use client'

import React, { useState } from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'

const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]

const productTypes = [
    'Totes',
    'Backpacks',
    'Travel Bags',
    'Hip Bags',
    'Laptop Sleeves',
];

const filterSections = [
    {
        id: 'color',
        name: 'Color',
        options: ['White', 'Beige', 'Blue', 'Brown', 'Green', 'Purple'],
    },
    {
        id: 'category',
        name: 'Category',
        options: ['New Arrivals', 'Sale', 'Travel', 'Organization', 'Accessories'],
    },
    {
        id: 'size',
        name: 'Size',
        options: ['2L', '6L', '12L', '18L', '20L', '40L'],
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const products = [
    { name: 'Boxy T-Shirt with Roll Sleeve Detail', price: 20, sale: false, type: 'Totes', color: 'Blue', category: 'New Arrivals', size: '12L', image: 'https://i.pinimg.com/736x/fb/d0/c4/fbd0c44f2dc475fb3c874ebfef2f8531.jpg' },
    { name: 'Boxy1 T-Shirt with Roll Sleeve', price: 20, sale: false, type: 'Backpacks', color: 'White', category: 'Sale', size: '6L', image: 'https://i.pinimg.com/736x/03/49/3d/03493d3ba8ff8a9d866b33a9996e0a55.jpg' },
    { name: 'Boxy2 T-Shirt with Roll Sleeve', price: 20, sale: false, type: 'Travel Bags', color: 'Beige', category: 'Travel', size: '18L', image: 'https://i.pinimg.com/736x/3c/9b/74/3c9b74b52093d832bb32c3f73120efe5.jpg' },
    { name: 'Boxy3 T-Shirt with Roll Sleeve', price: 20, sale: true, oldPrice: 30, type: 'Hip Bags', color: 'Brown', category: 'Organization', size: '2L', image: 'https://i.pinimg.com/736x/e8/5d/fd/e85dfde78ef8ed7acfdf723407e5f5c3.jpg' },
    { name: 'Boxy4 T-Shirt with Roll Sleeve', price: 20, sale: false, type: 'Laptop Sleeves', color: 'Green', category: 'Accessories', size: '40L', image: 'https://i.pinimg.com/736x/2a/fd/0c/2afd0c9420a75f61b30df345d57fe7fe.jpg' },
    { name: 'Boxy5 T-Shirt with Roll Sleeve', price: 20, sale: false, type: 'Totes', color: 'Purple', category: 'New Arrivals', size: '20L', image: 'https://i.pinimg.com/736x/db/79/a4/db79a4772523bb36ba41fb045803dcc2.jpg' },
];

function FilterSidebar({ selectedType, setSelectedType, selectedFilters, setSelectedFilters, mobileOpen, setMobileOpen }) {
    const [openSections, setOpenSections] = useState({});

    const toggleSection = (id) => {
        setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const handleFilterChange = (section, option) => {
        setSelectedFilters((prev) => {
            const current = prev[section] || [];
            return {
                ...prev,
                [section]: current.includes(option)
                    ? current.filter((o) => o !== option)
                    : [...current, option],
            };
        });
    };

    return (
        <>
            {/* Mobile Filter Button */}
            <button
                className="md:hidden mb-4 px-4 py-2 bg-gray-900 text-white rounded w-full"
                onClick={() => setMobileOpen(!mobileOpen)}
            >
                {mobileOpen ? 'Hide Filters' : 'Show Filters'}
            </button>
            {/* Sidebar (hidden on mobile unless open) */}
            <aside className={`bg-white border-r border-gray-200 px-4 py-6 w-full max-w-xs md:block ${mobileOpen ? 'block' : 'hidden'} md:static md:w-full md:max-w-xs` }>
                {/* Product Types */}
                <ul className="mb-6">
                    {productTypes.map((type) => (
                        <li key={type}>
                            <button
                                className={`block w-full text-left px-2 py-2 rounded transition ${selectedType === type
                                        ? 'bg-gray-900 text-white'
                                        : 'hover:bg-gray-100 text-gray-900'
                                    }`}
                                onClick={() => setSelectedType(type)}
                            >
                                {type}
                            </button>
                        </li>
                    ))}
                </ul>
                <hr className="my-4" />
                {/* Expandable Filter Sections */}
                {filterSections.map((section) => (
                    <div key={section.id} className="border-b border-gray-200 py-2">
                        <button
                            className="flex w-full items-center justify-between text-gray-900 font-medium py-2"
                            onClick={() => toggleSection(section.id)}
                            type="button"
                        >
                            <span>{section.name}</span>
                            {openSections[section.id] ? (
                                <MinusIcon className="w-5 h-5" />
                            ) : (
                                <PlusIcon className="w-5 h-5" />
                            )}
                        </button>
                        {openSections[section.id] && (
                            <div className="pt-2 pl-2 space-y-2">
                                {section.options.map((option) => (
                                    <label
                                        key={option}
                                        className="flex items-center gap-2 text-gray-700 cursor-pointer"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={selectedFilters[section.id]?.includes(option) || false}
                                            onChange={() => handleFilterChange(section.id, option)}
                                            className="accent-indigo-600"
                                        />
                                        <span>{option}</span>
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </aside>
        </>
    );
}

export default function ShopPage() {
    const [selectedType, setSelectedType] = useState(null);
    const [selectedFilters, setSelectedFilters] = useState({});
    const [mobileOpen, setMobileOpen] = useState(false);

    // Filtering logic
    const filteredProducts = products.filter((product) => {
        // Type filter
        if (selectedType && product.type !== selectedType) return false;
        // Section filters
        for (const section of filterSections) {
            const selected = selectedFilters[section.id];
            if (selected && selected.length > 0 && !selected.includes(product[section.id])) {
                return false;
            }
        }
        return true;
    });

    return (
        <div className="bg-white min-h-screen pt-20">
            {/* Banner */}
            <div className="w-full flex items-center justify-center relative mb-8" style={{ height: '220px', background: 'linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1500&q=80) center/cover', }}>
                <h2 className="text-4xl font-extrabold tracking-widest text-white drop-shadow-lg" style={{ letterSpacing: '0.15em' }}>PRODUCTS</h2>
            </div>
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/4 w-full">
                        <FilterSidebar
                            selectedType={selectedType}
                            setSelectedType={setSelectedType}
                            selectedFilters={selectedFilters}
                            setSelectedFilters={setSelectedFilters}
                            mobileOpen={mobileOpen}
                            setMobileOpen={setMobileOpen}
                        />
                    </div>
                    <section className="flex-1">
                        {/* Grille produits custom */}
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 pb-16">
                            {filteredProducts.length === 0 && (
                                <div className="col-span-full text-center text-gray-400 py-12">No products found.</div>
                            )}
                            {filteredProducts.map((product, idx) => (
                                <div key={idx} className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col group transition-transform hover:-translate-y-1">
                                    <div className="relative">
                                        <img src={product.image} alt={product.name} className="w-full h-80 object-cover" />
                                        {product.sale && (
                                            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">Sale</span>
                                        )}
                                        <button className="hidden group-hover:flex absolute inset-0 items-center justify-center bg-black/50 text-white font-semibold rounded transition-all">ADD TO CART</button>
                                    </div>
                                    <div className="p-4 flex-1 flex flex-col justify-between">
                                        <div className="font-medium text-gray-800 mb-1">{product.name}</div>
                                        <div className="text-gray-700 text-base">
                                            {product.sale ? (
                                                <>
                                                    <span className="line-through text-gray-400 mr-2">${product.oldPrice}.00</span>
                                                    <span className="text-red-500">${product.price}.00</span>
                                                </>
                                            ) : (
                                                <span>${product.price}.00</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
} 