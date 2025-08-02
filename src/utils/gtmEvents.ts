// Google Tag Manager Event Tracking Utilities
export const trackGTMEvent = (eventName: string, eventData: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventData,
      timestamp: new Date().toISOString(),
    });
  }
};

// Specific event trackers for real estate actions
export const trackPropertyView = (propertyId: string, propertyType: string, location: string) => {
  trackGTMEvent('property_view', {
    property_id: propertyId,
    property_type: propertyType,
    property_location: location,
  });
};

export const trackPropertyInquiry = (propertyId: string, inquiryType: 'whatsapp' | 'email' | 'phone') => {
  trackGTMEvent('property_inquiry', {
    property_id: propertyId,
    inquiry_type: inquiryType,
  });
};

export const trackFormSubmission = (formType: string, formData: Record<string, any>) => {
  trackGTMEvent('form_submission', {
    form_type: formType,
    ...formData,
  });
};

export const trackPhoneCall = (phoneNumber: string, source: string) => {
  trackGTMEvent('phone_call', {
    phone_number: phoneNumber,
    call_source: source,
  });
};

export const trackWhatsAppClick = (message: string, source: string) => {
  trackGTMEvent('whatsapp_click', {
    message_preview: message.substring(0, 50),
    click_source: source,
  });
};

export const trackSocialMediaClick = (platform: string, url: string) => {
  trackGTMEvent('social_media_click', {
    platform,
    destination_url: url,
  });
};

export const trackPageEngagement = (timeOnPage: number, scrollDepth: number) => {
  trackGTMEvent('page_engagement', {
    time_on_page_seconds: timeOnPage,
    scroll_depth_percentage: scrollDepth,
  });
};

// Enhanced e-commerce tracking for property listings
export const trackPropertyListView = (properties: Array<{id: string, type: string, price: number, location: string}>) => {
  trackGTMEvent('view_item_list', {
    item_list_name: 'Property Listings',
    items: properties.map(prop => ({
      item_id: prop.id,
      item_name: `${prop.type} in ${prop.location}`,
      item_category: prop.type,
      price: prop.price,
      item_location_id: prop.location,
    })),
  });
};

export const trackPropertyClick = (propertyId: string, propertyName: string, propertyType: string, price: number, position: number) => {
  trackGTMEvent('select_item', {
    item_list_name: 'Property Listings',
    items: [{
      item_id: propertyId,
      item_name: propertyName,
      item_category: propertyType,
      price: price,
      index: position,
    }],
  });
};