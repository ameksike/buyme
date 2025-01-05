terraform {
  required_providers {
    neon = {
      source  = "kislerdm/neon"
      version = ">= 0.2.2"
    }
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
    render = {
      source  = "render-oss/render"
      version = "~> 0.1"
    }
  }
}